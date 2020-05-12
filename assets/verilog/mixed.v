module mixed(output out, input a, b, c);

   wire w1, w2, w3, w4;
   assign w1 = a & c;
   assign w2 = ~a & ~c;
   nor (w3, w1, w2);
   not (w4, w3);
   always@(w4, b)
	 begin
		case({w4,b})
		  2'b00: {out} = 1'b0;
		  2'b01: {out} = 1'b0;
		  2'b10: {out} = 1'b0;
		  2'b11: {out} = 1'b1;
		endcase end // case ({w4,b})

endmodule
