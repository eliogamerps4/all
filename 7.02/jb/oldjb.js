pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
if(main_ret == 179 || main_ret == 0){
	document.getElementById("progress").innerHTML="Pirateo de PS4 7.55 completo con exito !!";
} else{
	alert("error al piratear!!!");
	document.getElementById("progress").innerHTML="el pirateo de la PS4 7.55 fallo !!";
} 