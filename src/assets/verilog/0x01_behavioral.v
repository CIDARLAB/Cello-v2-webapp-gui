module x01(output out, input a, b, c);

   always@(c, b, a)
	 begin
		if (a & b & c)
		  out = 1;
		else
		  out = 0;
	 end

endmodule
