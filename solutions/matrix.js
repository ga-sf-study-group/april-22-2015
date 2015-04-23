module.exports = Matrix = function Matrix(size) {
  var mat = [];

  for (var i = 0; i < size; i++) {
    mat[i] = new Array(size);
  }

  this.mat = mat;
  this.size = size;
};

Matrix.prototype.row = function(i,arr) {
  if (arr && arr.length === this.size) {
    this.mat[i] = arr;
    return this.mat;
  } else {
    return this.mat[i];
  }
};

Matrix.prototype.col = function(i,arr) {
  if (arr && arr.length === this.size) {
    for (var j = 0; j < this.size; j++) {
      this.mat[j][i] = arr[j];
    }
    return this.mat;
  } else {
    return this.mat[i];
  }
};

Matrix.prototype.rotate = function() {
  var dummy = new Matrix(this.size);
  for (var i = 0; i < this.size; i++) {
    var col = this.row(i).reverse();
    dummy.col(i, col);
  }
  this.mat = dummy.mat;
  return this;
};

Matrix.prototype.print = function() {
    var str = this.mat.map(function(x) {
      return x.join(" ");
    }).join("\n");
    console.log(str);
    return this;
};

