module.exports = {
	literals: {
		'keyword.operator': ['<=','=','=>','*>','ifnone','+','-','+:','-:','?','!','~','&','~&','|','~|','^','~^','^~','/','%','==','!=','===','!==','&&','||','**','<','>','>=','>>','<<','>>>','<<<'],
		'keyword.control': ['if','else','case','endcase','for','begin','end','assign','initial','always','<=','deassign','force','release','fork','join','repeat','disable','@','*','->','posedge','negedge','wait','casez','casex','forever','while','specify','endspecify','pulsestyle_onevent','pulsestyle_ondetect','showcancelled','noshowcancelled'],
		'paren.lparen': ['(', '{', '['],
		'paren.rparen': [')', '}', ']'],
		'storage.type': ['defparam','localparam','signed','integer','real','realtime','time','parameter','specparam','inout','input','output','reg','event','genvar','trireg','vectored','scalared','supply0','supply1','tri','triand','trior','tri0','tri1','wire','wand','wor'],
		'storage.modifier': ['highz1','highz0','strong0','pull0','weak0','strong1','pull1','weak1','small','medium','large'],
		'support.class': ['module','endmodule','function','endfunction','task','endtask','generate','endgenerate'],
		'support.function': ['pulldown','pullup','cmos','rcmos','bufif0','bufif1','notif0','notif1','nmos','pmos','rnmos','rpmos','and','nand','or','nor','xor','xnor','buf','not','tranif0','tranif1','rtranif1','rtranif0','tran','rtran'],
		'support.variable': ['PATHPULSE$','`timescale'],
		'constant.language': ['NOT','not','OR','or']
	},
	symbols: {
		'identifier' : 'Escaped_identifier' | 'Simple_identifier' | 'Dollar_Identifier' | 'Time_Identifier',
		'constant.numeric' : 'Hex_number' | 'Octal_number' | 'Binary_number' | 'Decimal_number' | 'Real_number',
		'comment.line' : 'One_line_comment',
		'comment.block': 'Block_comment',
		'string': 'String'
	}
};
