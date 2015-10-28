function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

forEach(['red','yellow','green'],
         function(color) {
            console.log (color);
          }
);
