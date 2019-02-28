// Generated from /Users/Kat/Documents/BU/CIDAR/Phoenix-GUI/antlr4/STL.g4 by ANTLR 4.7
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class STLParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, BOOLEAN=40, VARIABLE=41, RATIONAL=42, WS=43, NEWLINE=44, SL_COMMENT=45;
	public static final int
		RULE_specification = 0, RULE_module = 1, RULE_moduleDescription = 2, RULE_property = 3, 
		RULE_expr = 4, RULE_booleanExpr = 5, RULE_translationMap = 6, RULE_translationPair = 7, 
		RULE_limitMap = 8, RULE_limitPair = 9;
	public static final String[] ruleNames = {
		"specification", "module", "moduleDescription", "property", "expr", "booleanExpr", 
		"translationMap", "translationPair", "limitMap", "limitPair"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'=>'", "'_'", "'&&'", "'||'", "'<<'", "'>>'", "'#'", "'('", "','", 
		"')'", "'='", "'!'", "'F'", "'['", "']'", "'G'", "'U'", "'-('", "'^'", 
		"'sqrt('", "'log('", "'ln('", "'abs('", "'der('", "'int('", "'*'", "'/'", 
		"'+'", "'-'", "'<'", "'<='", "'>='", "'>'", "'{'", "'}'", "'@'", "':'", 
		"'max'", "'min'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, "BOOLEAN", "VARIABLE", "RATIONAL", "WS", "NEWLINE", 
		"SL_COMMENT"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "STL.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public STLParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class SpecificationContext extends ParserRuleContext {
		public ModuleContext spec;
		public List<TerminalNode> NEWLINE() { return getTokens(STLParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(STLParser.NEWLINE, i);
		}
		public ModuleContext module() {
			return getRuleContext(ModuleContext.class,0);
		}
		public LimitMapContext limitMap() {
			return getRuleContext(LimitMapContext.class,0);
		}
		public List<ModuleDescriptionContext> moduleDescription() {
			return getRuleContexts(ModuleDescriptionContext.class);
		}
		public ModuleDescriptionContext moduleDescription(int i) {
			return getRuleContext(ModuleDescriptionContext.class,i);
		}
		public List<TranslationMapContext> translationMap() {
			return getRuleContexts(TranslationMapContext.class);
		}
		public TranslationMapContext translationMap(int i) {
			return getRuleContext(TranslationMapContext.class,i);
		}
		public SpecificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_specification; }
	}

	public final SpecificationContext specification() throws RecognitionException {
		SpecificationContext _localctx = new SpecificationContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_specification);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(20);
			((SpecificationContext)_localctx).spec = module(0);
			setState(21);
			match(NEWLINE);
			setState(22);
			match(NEWLINE);
			setState(26); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(23);
				moduleDescription();
				setState(24);
				match(NEWLINE);
				}
				}
				setState(28); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==VARIABLE );
			setState(30);
			match(NEWLINE);
			setState(34); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(31);
					translationMap();
					setState(32);
					match(NEWLINE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(36); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			{
			setState(38);
			limitMap();
			setState(39);
			match(NEWLINE);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModuleContext extends ParserRuleContext {
		public ModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module; }
	 
		public ModuleContext() { }
		public void copyFrom(ModuleContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ModuleLeafContext extends ModuleContext {
		public Token moduleName;
		public List<TerminalNode> VARIABLE() { return getTokens(STLParser.VARIABLE); }
		public TerminalNode VARIABLE(int i) {
			return getToken(STLParser.VARIABLE, i);
		}
		public ModuleLeafContext(ModuleContext ctx) { copyFrom(ctx); }
	}
	public static class ModuleOpContext extends ModuleContext {
		public ModuleContext left;
		public Token op;
		public Token tmap;
		public ModuleContext right;
		public List<ModuleContext> module() {
			return getRuleContexts(ModuleContext.class);
		}
		public ModuleContext module(int i) {
			return getRuleContext(ModuleContext.class,i);
		}
		public TerminalNode VARIABLE() { return getToken(STLParser.VARIABLE, 0); }
		public ModuleOpContext(ModuleContext ctx) { copyFrom(ctx); }
	}

	public final ModuleContext module() throws RecognitionException {
		return module(0);
	}

	private ModuleContext module(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ModuleContext _localctx = new ModuleContext(_ctx, _parentState);
		ModuleContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_module, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new ModuleLeafContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(42);
			((ModuleLeafContext)_localctx).moduleName = match(VARIABLE);
			setState(43);
			match(T__7);
			setState(44);
			match(VARIABLE);
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__8) {
				{
				{
				setState(45);
				match(T__8);
				setState(46);
				match(VARIABLE);
				}
				}
				setState(51);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(52);
			match(T__9);
			}
			_ctx.stop = _input.LT(-1);
			setState(86);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(84);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
					case 1:
						{
						_localctx = new ModuleOpContext(new ModuleContext(_parentctx, _parentState));
						((ModuleOpContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_module);
						setState(54);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(55);
						((ModuleOpContext)_localctx).op = match(T__0);
						setState(56);
						match(T__1);
						setState(57);
						((ModuleOpContext)_localctx).tmap = match(VARIABLE);
						setState(58);
						((ModuleOpContext)_localctx).right = module(8);
						}
						break;
					case 2:
						{
						_localctx = new ModuleOpContext(new ModuleContext(_parentctx, _parentState));
						((ModuleOpContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_module);
						setState(59);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(60);
						((ModuleOpContext)_localctx).op = match(T__2);
						setState(61);
						match(T__1);
						setState(62);
						((ModuleOpContext)_localctx).tmap = match(VARIABLE);
						setState(63);
						((ModuleOpContext)_localctx).right = module(7);
						}
						break;
					case 3:
						{
						_localctx = new ModuleOpContext(new ModuleContext(_parentctx, _parentState));
						((ModuleOpContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_module);
						setState(64);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(65);
						((ModuleOpContext)_localctx).op = match(T__3);
						setState(66);
						match(T__1);
						setState(67);
						((ModuleOpContext)_localctx).tmap = match(VARIABLE);
						setState(68);
						((ModuleOpContext)_localctx).right = module(6);
						}
						break;
					case 4:
						{
						_localctx = new ModuleOpContext(new ModuleContext(_parentctx, _parentState));
						((ModuleOpContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_module);
						setState(69);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(70);
						((ModuleOpContext)_localctx).op = match(T__4);
						setState(71);
						match(T__1);
						setState(72);
						((ModuleOpContext)_localctx).tmap = match(VARIABLE);
						setState(73);
						((ModuleOpContext)_localctx).right = module(5);
						}
						break;
					case 5:
						{
						_localctx = new ModuleOpContext(new ModuleContext(_parentctx, _parentState));
						((ModuleOpContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_module);
						setState(74);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(75);
						((ModuleOpContext)_localctx).op = match(T__5);
						setState(76);
						match(T__1);
						setState(77);
						((ModuleOpContext)_localctx).tmap = match(VARIABLE);
						setState(78);
						((ModuleOpContext)_localctx).right = module(4);
						}
						break;
					case 6:
						{
						_localctx = new ModuleOpContext(new ModuleContext(_parentctx, _parentState));
						((ModuleOpContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_module);
						setState(79);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(80);
						((ModuleOpContext)_localctx).op = match(T__6);
						setState(81);
						match(T__1);
						setState(82);
						((ModuleOpContext)_localctx).tmap = match(VARIABLE);
						setState(83);
						((ModuleOpContext)_localctx).right = module(3);
						}
						break;
					}
					} 
				}
				setState(88);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ModuleDescriptionContext extends ParserRuleContext {
		public Token moduleName;
		public PropertyContext moduleFormula;
		public TerminalNode VARIABLE() { return getToken(STLParser.VARIABLE, 0); }
		public PropertyContext property() {
			return getRuleContext(PropertyContext.class,0);
		}
		public ModuleDescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleDescription; }
	}

	public final ModuleDescriptionContext moduleDescription() throws RecognitionException {
		ModuleDescriptionContext _localctx = new ModuleDescriptionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_moduleDescription);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			((ModuleDescriptionContext)_localctx).moduleName = match(VARIABLE);
			setState(90);
			match(T__10);
			setState(91);
			((ModuleDescriptionContext)_localctx).moduleFormula = property(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertyContext extends ParserRuleContext {
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	 
		public PropertyContext() { }
		public void copyFrom(PropertyContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class BooleanPredContext extends PropertyContext {
		public BooleanExprContext booleanExpr() {
			return getRuleContext(BooleanExprContext.class,0);
		}
		public BooleanPredContext(PropertyContext ctx) { copyFrom(ctx); }
	}
	public static class FormulaContext extends PropertyContext {
		public PropertyContext left;
		public Token op;
		public PropertyContext child;
		public Token low;
		public Token high;
		public PropertyContext right;
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public List<TerminalNode> RATIONAL() { return getTokens(STLParser.RATIONAL); }
		public TerminalNode RATIONAL(int i) {
			return getToken(STLParser.RATIONAL, i);
		}
		public FormulaContext(PropertyContext ctx) { copyFrom(ctx); }
	}
	public static class ParpropContext extends PropertyContext {
		public PropertyContext child;
		public PropertyContext property() {
			return getRuleContext(PropertyContext.class,0);
		}
		public ParpropContext(PropertyContext ctx) { copyFrom(ctx); }
	}

	public final PropertyContext property() throws RecognitionException {
		return property(0);
	}

	private PropertyContext property(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		PropertyContext _localctx = new PropertyContext(_ctx, _parentState);
		PropertyContext _prevctx = _localctx;
		int _startState = 6;
		enterRecursionRule(_localctx, 6, RULE_property, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				_localctx = new ParpropContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(94);
				match(T__7);
				setState(95);
				((ParpropContext)_localctx).child = property(0);
				setState(96);
				match(T__9);
				}
				break;
			case 2:
				{
				_localctx = new BooleanPredContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(98);
				booleanExpr();
				}
				break;
			case 3:
				{
				_localctx = new FormulaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(99);
				((FormulaContext)_localctx).op = match(T__11);
				setState(100);
				((FormulaContext)_localctx).child = property(10);
				}
				break;
			case 4:
				{
				_localctx = new FormulaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(101);
				((FormulaContext)_localctx).op = match(T__12);
				setState(102);
				match(T__13);
				setState(103);
				((FormulaContext)_localctx).low = match(RATIONAL);
				setState(104);
				match(T__8);
				setState(105);
				((FormulaContext)_localctx).high = match(RATIONAL);
				setState(106);
				match(T__14);
				setState(107);
				((FormulaContext)_localctx).child = property(9);
				}
				break;
			case 5:
				{
				_localctx = new FormulaContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(108);
				((FormulaContext)_localctx).op = match(T__15);
				setState(109);
				match(T__13);
				setState(110);
				((FormulaContext)_localctx).low = match(RATIONAL);
				setState(111);
				match(T__8);
				setState(112);
				((FormulaContext)_localctx).high = match(RATIONAL);
				setState(113);
				match(T__14);
				setState(114);
				((FormulaContext)_localctx).child = property(8);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(145);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(143);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
					case 1:
						{
						_localctx = new FormulaContext(new PropertyContext(_parentctx, _parentState));
						((FormulaContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_property);
						setState(117);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(118);
						((FormulaContext)_localctx).op = match(T__0);
						setState(119);
						((FormulaContext)_localctx).right = property(8);
						}
						break;
					case 2:
						{
						_localctx = new FormulaContext(new PropertyContext(_parentctx, _parentState));
						((FormulaContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_property);
						setState(120);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(121);
						((FormulaContext)_localctx).op = match(T__2);
						setState(122);
						((FormulaContext)_localctx).right = property(7);
						}
						break;
					case 3:
						{
						_localctx = new FormulaContext(new PropertyContext(_parentctx, _parentState));
						((FormulaContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_property);
						setState(123);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(124);
						((FormulaContext)_localctx).op = match(T__3);
						setState(125);
						((FormulaContext)_localctx).right = property(6);
						}
						break;
					case 4:
						{
						_localctx = new FormulaContext(new PropertyContext(_parentctx, _parentState));
						((FormulaContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_property);
						setState(126);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(127);
						((FormulaContext)_localctx).op = match(T__4);
						setState(128);
						((FormulaContext)_localctx).right = property(5);
						}
						break;
					case 5:
						{
						_localctx = new FormulaContext(new PropertyContext(_parentctx, _parentState));
						((FormulaContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_property);
						setState(129);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(130);
						((FormulaContext)_localctx).op = match(T__5);
						setState(131);
						((FormulaContext)_localctx).right = property(4);
						}
						break;
					case 6:
						{
						_localctx = new FormulaContext(new PropertyContext(_parentctx, _parentState));
						((FormulaContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_property);
						setState(132);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(133);
						((FormulaContext)_localctx).op = match(T__6);
						setState(134);
						((FormulaContext)_localctx).right = property(3);
						}
						break;
					case 7:
						{
						_localctx = new FormulaContext(new PropertyContext(_parentctx, _parentState));
						((FormulaContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_property);
						setState(135);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(136);
						((FormulaContext)_localctx).op = match(T__16);
						setState(137);
						match(T__13);
						setState(138);
						((FormulaContext)_localctx).low = match(RATIONAL);
						setState(139);
						match(T__8);
						setState(140);
						((FormulaContext)_localctx).high = match(RATIONAL);
						setState(141);
						match(T__14);
						setState(142);
						((FormulaContext)_localctx).right = property(2);
						}
						break;
					}
					} 
				}
				setState(147);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode RATIONAL() { return getToken(STLParser.RATIONAL, 0); }
		public TerminalNode VARIABLE() { return getToken(STLParser.VARIABLE, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 8;
		enterRecursionRule(_localctx, 8, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
			case T__17:
				{
				setState(149);
				_la = _input.LA(1);
				if ( !(_la==T__7 || _la==T__17) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(150);
				expr(0);
				setState(151);
				match(T__9);
				}
				break;
			case T__19:
			case T__20:
			case T__21:
			case T__22:
			case T__23:
			case T__24:
				{
				setState(153);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__19) | (1L << T__20) | (1L << T__21) | (1L << T__22) | (1L << T__23) | (1L << T__24))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(154);
				expr(0);
				setState(155);
				match(T__9);
				}
				break;
			case RATIONAL:
				{
				setState(157);
				match(RATIONAL);
				}
				break;
			case VARIABLE:
				{
				setState(158);
				match(VARIABLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(172);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(170);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(161);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(162);
						match(T__18);
						setState(163);
						expr(7);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(164);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(165);
						_la = _input.LA(1);
						if ( !(_la==T__25 || _la==T__26) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(166);
						expr(5);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(167);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(168);
						_la = _input.LA(1);
						if ( !(_la==T__27 || _la==T__28) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(169);
						expr(4);
						}
						break;
					}
					} 
				}
				setState(174);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class BooleanExprContext extends ParserRuleContext {
		public ExprContext left;
		public Token op;
		public ExprContext right;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode BOOLEAN() { return getToken(STLParser.BOOLEAN, 0); }
		public BooleanExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanExpr; }
	}

	public final BooleanExprContext booleanExpr() throws RecognitionException {
		BooleanExprContext _localctx = new BooleanExprContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_booleanExpr);
		int _la;
		try {
			setState(180);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
			case T__17:
			case T__19:
			case T__20:
			case T__21:
			case T__22:
			case T__23:
			case T__24:
			case VARIABLE:
			case RATIONAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(175);
				((BooleanExprContext)_localctx).left = expr(0);
				setState(176);
				((BooleanExprContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__10) | (1L << T__29) | (1L << T__30) | (1L << T__31) | (1L << T__32))) != 0)) ) {
					((BooleanExprContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(177);
				((BooleanExprContext)_localctx).right = expr(0);
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 2);
				{
				setState(179);
				((BooleanExprContext)_localctx).op = match(BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TranslationMapContext extends ParserRuleContext {
		public Token tmapName;
		public List<TranslationPairContext> translationPair() {
			return getRuleContexts(TranslationPairContext.class);
		}
		public TranslationPairContext translationPair(int i) {
			return getRuleContext(TranslationPairContext.class,i);
		}
		public TerminalNode VARIABLE() { return getToken(STLParser.VARIABLE, 0); }
		public TranslationMapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_translationMap; }
	}

	public final TranslationMapContext translationMap() throws RecognitionException {
		TranslationMapContext _localctx = new TranslationMapContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_translationMap);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			((TranslationMapContext)_localctx).tmapName = match(VARIABLE);
			setState(183);
			match(T__33);
			setState(184);
			translationPair();
			setState(189);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__8) {
				{
				{
				setState(185);
				match(T__8);
				setState(186);
				translationPair();
				}
				}
				setState(191);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(192);
			match(T__34);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TranslationPairContext extends ParserRuleContext {
		public Token key;
		public Token moduleName;
		public Token value;
		public List<TerminalNode> VARIABLE() { return getTokens(STLParser.VARIABLE); }
		public TerminalNode VARIABLE(int i) {
			return getToken(STLParser.VARIABLE, i);
		}
		public TranslationPairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_translationPair; }
	}

	public final TranslationPairContext translationPair() throws RecognitionException {
		TranslationPairContext _localctx = new TranslationPairContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_translationPair);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			((TranslationPairContext)_localctx).key = match(VARIABLE);
			setState(197);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__35) {
				{
				setState(195);
				match(T__35);
				setState(196);
				((TranslationPairContext)_localctx).moduleName = match(VARIABLE);
				}
			}

			setState(199);
			match(T__36);
			setState(200);
			((TranslationPairContext)_localctx).value = match(VARIABLE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LimitMapContext extends ParserRuleContext {
		public Token lmapName;
		public List<LimitPairContext> limitPair() {
			return getRuleContexts(LimitPairContext.class);
		}
		public LimitPairContext limitPair(int i) {
			return getRuleContext(LimitPairContext.class,i);
		}
		public TerminalNode VARIABLE() { return getToken(STLParser.VARIABLE, 0); }
		public LimitMapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_limitMap; }
	}

	public final LimitMapContext limitMap() throws RecognitionException {
		LimitMapContext _localctx = new LimitMapContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_limitMap);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(202);
			((LimitMapContext)_localctx).lmapName = match(VARIABLE);
			setState(203);
			match(T__13);
			setState(204);
			limitPair();
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__8) {
				{
				{
				setState(205);
				match(T__8);
				setState(206);
				limitPair();
				}
				}
				setState(211);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(212);
			match(T__14);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LimitPairContext extends ParserRuleContext {
		public Token sigName;
		public Token maxValue;
		public Token minValue;
		public TerminalNode VARIABLE() { return getToken(STLParser.VARIABLE, 0); }
		public List<TerminalNode> RATIONAL() { return getTokens(STLParser.RATIONAL); }
		public TerminalNode RATIONAL(int i) {
			return getToken(STLParser.RATIONAL, i);
		}
		public LimitPairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_limitPair; }
	}

	public final LimitPairContext limitPair() throws RecognitionException {
		LimitPairContext _localctx = new LimitPairContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_limitPair);
		try {
			setState(240);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(214);
				match(T__33);
				setState(215);
				((LimitPairContext)_localctx).sigName = match(VARIABLE);
				setState(216);
				match(T__36);
				setState(217);
				match(T__33);
				setState(218);
				match(T__37);
				setState(219);
				match(T__36);
				setState(220);
				((LimitPairContext)_localctx).maxValue = match(RATIONAL);
				setState(221);
				match(T__8);
				setState(222);
				match(T__38);
				setState(223);
				match(T__36);
				setState(224);
				((LimitPairContext)_localctx).minValue = match(RATIONAL);
				setState(225);
				match(T__34);
				setState(226);
				match(T__34);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(227);
				match(T__33);
				setState(228);
				((LimitPairContext)_localctx).sigName = match(VARIABLE);
				setState(229);
				match(T__36);
				setState(230);
				match(T__33);
				setState(231);
				match(T__38);
				setState(232);
				match(T__36);
				setState(233);
				((LimitPairContext)_localctx).minValue = match(RATIONAL);
				setState(234);
				match(T__8);
				setState(235);
				match(T__37);
				setState(236);
				match(T__36);
				setState(237);
				((LimitPairContext)_localctx).maxValue = match(RATIONAL);
				setState(238);
				match(T__34);
				setState(239);
				match(T__34);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return module_sempred((ModuleContext)_localctx, predIndex);
		case 3:
			return property_sempred((PropertyContext)_localctx, predIndex);
		case 4:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean module_sempred(ModuleContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 7);
		case 1:
			return precpred(_ctx, 6);
		case 2:
			return precpred(_ctx, 5);
		case 3:
			return precpred(_ctx, 4);
		case 4:
			return precpred(_ctx, 3);
		case 5:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean property_sempred(PropertyContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return precpred(_ctx, 7);
		case 7:
			return precpred(_ctx, 6);
		case 8:
			return precpred(_ctx, 5);
		case 9:
			return precpred(_ctx, 4);
		case 10:
			return precpred(_ctx, 3);
		case 11:
			return precpred(_ctx, 2);
		case 12:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 13:
			return precpred(_ctx, 6);
		case 14:
			return precpred(_ctx, 4);
		case 15:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3/\u00f5\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\3\2\3\2\3\2\3\2\3\2\3\2\6\2\35\n\2\r\2\16\2\36\3\2\3\2\3\2\3\2\6\2"+
		"%\n\2\r\2\16\2&\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\7\3\62\n\3\f\3\16"+
		"\3\65\13\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\7"+
		"\3W\n\3\f\3\16\3Z\13\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5v\n\5\3\5"+
		"\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\7\5\u0092\n\5\f\5\16\5\u0095\13\5\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00a2\n\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\7\6\u00ad\n\6\f\6\16\6\u00b0\13\6\3\7\3\7\3\7\3\7\3"+
		"\7\5\7\u00b7\n\7\3\b\3\b\3\b\3\b\3\b\7\b\u00be\n\b\f\b\16\b\u00c1\13\b"+
		"\3\b\3\b\3\t\3\t\3\t\5\t\u00c8\n\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\7\n"+
		"\u00d2\n\n\f\n\16\n\u00d5\13\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\13\5\13\u00f3\n\13\3\13\2\5\4\b\n\f\2\4\6\b"+
		"\n\f\16\20\22\24\2\7\4\2\n\n\24\24\3\2\26\33\3\2\34\35\3\2\36\37\4\2\r"+
		"\r #\2\u0109\2\26\3\2\2\2\4+\3\2\2\2\6[\3\2\2\2\bu\3\2\2\2\n\u00a1\3\2"+
		"\2\2\f\u00b6\3\2\2\2\16\u00b8\3\2\2\2\20\u00c4\3\2\2\2\22\u00cc\3\2\2"+
		"\2\24\u00f2\3\2\2\2\26\27\5\4\3\2\27\30\7.\2\2\30\34\7.\2\2\31\32\5\6"+
		"\4\2\32\33\7.\2\2\33\35\3\2\2\2\34\31\3\2\2\2\35\36\3\2\2\2\36\34\3\2"+
		"\2\2\36\37\3\2\2\2\37 \3\2\2\2 $\7.\2\2!\"\5\16\b\2\"#\7.\2\2#%\3\2\2"+
		"\2$!\3\2\2\2%&\3\2\2\2&$\3\2\2\2&\'\3\2\2\2\'(\3\2\2\2()\5\22\n\2)*\7"+
		".\2\2*\3\3\2\2\2+,\b\3\1\2,-\7+\2\2-.\7\n\2\2.\63\7+\2\2/\60\7\13\2\2"+
		"\60\62\7+\2\2\61/\3\2\2\2\62\65\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64"+
		"\66\3\2\2\2\65\63\3\2\2\2\66\67\7\f\2\2\67X\3\2\2\289\f\t\2\29:\7\3\2"+
		"\2:;\7\4\2\2;<\7+\2\2<W\5\4\3\n=>\f\b\2\2>?\7\5\2\2?@\7\4\2\2@A\7+\2\2"+
		"AW\5\4\3\tBC\f\7\2\2CD\7\6\2\2DE\7\4\2\2EF\7+\2\2FW\5\4\3\bGH\f\6\2\2"+
		"HI\7\7\2\2IJ\7\4\2\2JK\7+\2\2KW\5\4\3\7LM\f\5\2\2MN\7\b\2\2NO\7\4\2\2"+
		"OP\7+\2\2PW\5\4\3\6QR\f\4\2\2RS\7\t\2\2ST\7\4\2\2TU\7+\2\2UW\5\4\3\5V"+
		"8\3\2\2\2V=\3\2\2\2VB\3\2\2\2VG\3\2\2\2VL\3\2\2\2VQ\3\2\2\2WZ\3\2\2\2"+
		"XV\3\2\2\2XY\3\2\2\2Y\5\3\2\2\2ZX\3\2\2\2[\\\7+\2\2\\]\7\r\2\2]^\5\b\5"+
		"\2^\7\3\2\2\2_`\b\5\1\2`a\7\n\2\2ab\5\b\5\2bc\7\f\2\2cv\3\2\2\2dv\5\f"+
		"\7\2ef\7\16\2\2fv\5\b\5\fgh\7\17\2\2hi\7\20\2\2ij\7,\2\2jk\7\13\2\2kl"+
		"\7,\2\2lm\7\21\2\2mv\5\b\5\13no\7\22\2\2op\7\20\2\2pq\7,\2\2qr\7\13\2"+
		"\2rs\7,\2\2st\7\21\2\2tv\5\b\5\nu_\3\2\2\2ud\3\2\2\2ue\3\2\2\2ug\3\2\2"+
		"\2un\3\2\2\2v\u0093\3\2\2\2wx\f\t\2\2xy\7\3\2\2y\u0092\5\b\5\nz{\f\b\2"+
		"\2{|\7\5\2\2|\u0092\5\b\5\t}~\f\7\2\2~\177\7\6\2\2\177\u0092\5\b\5\b\u0080"+
		"\u0081\f\6\2\2\u0081\u0082\7\7\2\2\u0082\u0092\5\b\5\7\u0083\u0084\f\5"+
		"\2\2\u0084\u0085\7\b\2\2\u0085\u0092\5\b\5\6\u0086\u0087\f\4\2\2\u0087"+
		"\u0088\7\t\2\2\u0088\u0092\5\b\5\5\u0089\u008a\f\3\2\2\u008a\u008b\7\23"+
		"\2\2\u008b\u008c\7\20\2\2\u008c\u008d\7,\2\2\u008d\u008e\7\13\2\2\u008e"+
		"\u008f\7,\2\2\u008f\u0090\7\21\2\2\u0090\u0092\5\b\5\4\u0091w\3\2\2\2"+
		"\u0091z\3\2\2\2\u0091}\3\2\2\2\u0091\u0080\3\2\2\2\u0091\u0083\3\2\2\2"+
		"\u0091\u0086\3\2\2\2\u0091\u0089\3\2\2\2\u0092\u0095\3\2\2\2\u0093\u0091"+
		"\3\2\2\2\u0093\u0094\3\2\2\2\u0094\t\3\2\2\2\u0095\u0093\3\2\2\2\u0096"+
		"\u0097\b\6\1\2\u0097\u0098\t\2\2\2\u0098\u0099\5\n\6\2\u0099\u009a\7\f"+
		"\2\2\u009a\u00a2\3\2\2\2\u009b\u009c\t\3\2\2\u009c\u009d\5\n\6\2\u009d"+
		"\u009e\7\f\2\2\u009e\u00a2\3\2\2\2\u009f\u00a2\7,\2\2\u00a0\u00a2\7+\2"+
		"\2\u00a1\u0096\3\2\2\2\u00a1\u009b\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1\u00a0"+
		"\3\2\2\2\u00a2\u00ae\3\2\2\2\u00a3\u00a4\f\b\2\2\u00a4\u00a5\7\25\2\2"+
		"\u00a5\u00ad\5\n\6\t\u00a6\u00a7\f\6\2\2\u00a7\u00a8\t\4\2\2\u00a8\u00ad"+
		"\5\n\6\7\u00a9\u00aa\f\5\2\2\u00aa\u00ab\t\5\2\2\u00ab\u00ad\5\n\6\6\u00ac"+
		"\u00a3\3\2\2\2\u00ac\u00a6\3\2\2\2\u00ac\u00a9\3\2\2\2\u00ad\u00b0\3\2"+
		"\2\2\u00ae\u00ac\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\13\3\2\2\2\u00b0\u00ae"+
		"\3\2\2\2\u00b1\u00b2\5\n\6\2\u00b2\u00b3\t\6\2\2\u00b3\u00b4\5\n\6\2\u00b4"+
		"\u00b7\3\2\2\2\u00b5\u00b7\7*\2\2\u00b6\u00b1\3\2\2\2\u00b6\u00b5\3\2"+
		"\2\2\u00b7\r\3\2\2\2\u00b8\u00b9\7+\2\2\u00b9\u00ba\7$\2\2\u00ba\u00bf"+
		"\5\20\t\2\u00bb\u00bc\7\13\2\2\u00bc\u00be\5\20\t\2\u00bd\u00bb\3\2\2"+
		"\2\u00be\u00c1\3\2\2\2\u00bf\u00bd\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0\u00c2"+
		"\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c2\u00c3\7%\2\2\u00c3\17\3\2\2\2\u00c4"+
		"\u00c7\7+\2\2\u00c5\u00c6\7&\2\2\u00c6\u00c8\7+\2\2\u00c7\u00c5\3\2\2"+
		"\2\u00c7\u00c8\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00ca\7\'\2\2\u00ca\u00cb"+
		"\7+\2\2\u00cb\21\3\2\2\2\u00cc\u00cd\7+\2\2\u00cd\u00ce\7\20\2\2\u00ce"+
		"\u00d3\5\24\13\2\u00cf\u00d0\7\13\2\2\u00d0\u00d2\5\24\13\2\u00d1\u00cf"+
		"\3\2\2\2\u00d2\u00d5\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4"+
		"\u00d6\3\2\2\2\u00d5\u00d3\3\2\2\2\u00d6\u00d7\7\21\2\2\u00d7\23\3\2\2"+
		"\2\u00d8\u00d9\7$\2\2\u00d9\u00da\7+\2\2\u00da\u00db\7\'\2\2\u00db\u00dc"+
		"\7$\2\2\u00dc\u00dd\7(\2\2\u00dd\u00de\7\'\2\2\u00de\u00df\7,\2\2\u00df"+
		"\u00e0\7\13\2\2\u00e0\u00e1\7)\2\2\u00e1\u00e2\7\'\2\2\u00e2\u00e3\7,"+
		"\2\2\u00e3\u00e4\7%\2\2\u00e4\u00f3\7%\2\2\u00e5\u00e6\7$\2\2\u00e6\u00e7"+
		"\7+\2\2\u00e7\u00e8\7\'\2\2\u00e8\u00e9\7$\2\2\u00e9\u00ea\7)\2\2\u00ea"+
		"\u00eb\7\'\2\2\u00eb\u00ec\7,\2\2\u00ec\u00ed\7\13\2\2\u00ed\u00ee\7("+
		"\2\2\u00ee\u00ef\7\'\2\2\u00ef\u00f0\7,\2\2\u00f0\u00f1\7%\2\2\u00f1\u00f3"+
		"\7%\2\2\u00f2\u00d8\3\2\2\2\u00f2\u00e5\3\2\2\2\u00f3\25\3\2\2\2\22\36"+
		"&\63VXu\u0091\u0093\u00a1\u00ac\u00ae\u00b6\u00bf\u00c7\u00d3\u00f2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}