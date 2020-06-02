ace.define(
  'ace/mode/verilog2001',
  [
    'require',
    'exports',
    'module',
    'ace/lib/oop',
    'ace/mode/text',
    'ace/ext/antlr4/token-type-map',
    'ace/ext/antlr4/tokenizer',
    'ace/mode/text_highlight_rules',
    'ace/worker/worker_client',
  ],
  function (require, exports, module) {
    var oop = require('ace/lib/oop');
    var TextMode = require('ace/mode/text').Mode;
    var tokenTypeMapping = antlr4_require('./javascript/verilog2001-token-type-mapping');
    var createTokenTypeMap = require('ace/ext/antlr4/token-type-map').createTokenTypeMap;
    var tokenTypeToNameMap = createTokenTypeMap(tokenTypeMapping);
    var Verilog2001Lexer = antlr4_require('./parser/Verilog2001Lexer').Verilog2001Lexer;
    var Antlr4Tokenizer = require('ace/ext/antlr4/tokenizer').Antlr4Tokenizer;

    var verilog2001Mode = function () {};

    oop.inherits(verilog2001Mode, TextMode);

    (function () {
      this.$id = 'ace/mode/verilog2001';

      this.getTokenizer = function () {
        if (!this.$tokenizer) {
          this.$tokenizer = new Antlr4Tokenizer(Verilog2001Lexer, tokenTypeToNameMap);
        }
        return this.$tokenizer;
      };

      var WorkerClient = require('ace/worker/worker_client').WorkerClient;
      this.createWorker = function (session) {
        this.$worker = new WorkerClient(['ace'], 'ace/worker/verilog2001-worker', 'verilog2001Worker');
        this.$worker.attachToDocument(session.getDocument());

        this.$worker.on('errors', function (e) {
          session.setAnnotations(e.data);
        });

        this.$worker.on('annotate', function (e) {
          session.setAnnotations(e.data);
        });

        this.$worker.on('terminate', function () {
          session.clearAnnotations();
        });

        return this.$worker;
      };
    }.call(verilog2001Mode.prototype));

    exports.Mode = verilog2001Mode;
  }
);
