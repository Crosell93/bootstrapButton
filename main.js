var obj = {
	myString : 'str',
	func : function() {
		console.log( this.myString );
	}
};


var prop = 'func';


// console.log( obj.asd || 'name' );

obj.odd = 'Nine 20';
obj.myString = 'New String'

// console.log( obj );

var a = {prop: 1}, b = {prop: 2}, c = {prop: 3};


a = b = c = {prop: 'allTheSame'};

//console.log(a, b, c);

var y = obj;

//console.log( y.myString );

// delete obj.func;

// console.log( obj );
obj.func();

var MYAPP = {
	
};