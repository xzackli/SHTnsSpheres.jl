var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SHTnsSpheres","category":"page"},{"location":"#SHTnsSpheres","page":"Home","title":"SHTnsSpheres","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for SHTnsSpheres.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SHTnsSpheres]","category":"page"},{"location":"#SHTnsSpheres.InOut","page":"Home","title":"SHTnsSpheres.InOut","text":"Wraps data to mark it as writeable.\n\n\n\n\n\n","category":"type"},{"location":"#SHTnsSpheres.erase-Tuple{Any}","page":"Home","title":"SHTnsSpheres.erase","text":"y = erase(x)\n\nSome functions need to make copies of input arguments to avoid modifying their contents and remain pure. Passing erase(x) as input argument is equivalent to passing x, except that it explicitly allows to modify the contents of x, thus avoiding copying and allocating.\n\n\n\n\n\n","category":"method"},{"location":"#SHTnsSpheres.protect-Tuple{SHTnsSpheres.InOut}","page":"Home","title":"SHTnsSpheres.protect","text":"y = protect(x)\n\nMakes sure x is not modified even if x::InOut. Used internally for reverse AD.\n\n\n\n\n\n","category":"method"},{"location":"#SHTnsSpheres.readable-Tuple{Any}","page":"Home","title":"SHTnsSpheres.readable","text":"Unwrap input argument. Used internally when we can promise that x will not be modified.\n\n\n\n\n\n","category":"method"},{"location":"#SHTnsSpheres.writable-Tuple{Any}","page":"Home","title":"SHTnsSpheres.writable","text":"Unwrap input argument. Used internally when we cannot promise that x will not be modified.\n\n\n\n\n\n","category":"method"}]
}
