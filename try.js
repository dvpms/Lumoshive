// class CheckoutBook {
//   constructor(title, userID){
//     this.title = title;
//     this.userID = userID;
//   }

//   checkoutBook(userID){
//     console.log(`Checkout Book${this.title} by ${userID}`);
//   }

// }

// class HitungDenda{
//   constructor(book, dayslate){
//     this.book = book;
//     this.dayslate = dayslate;
//   }

//   hitungDenda(){
//     const fee = this.dayslate * 2000;
//     const formatter = new Intl.NumberFormat('id-ID', {
//       style: 'currency',
//       currency: 'IDR',
//       minimumFractionDigits: 0,
//     }).format(fee);
//     console.log(`Total denda untuk buku ${this.book.title} dibayar adalah ${formatter}`);
//   }
// }

// let book1 = new CheckoutBook("Harry Potter", "John Doe");
// let denda = new HitungDenda(book1, 5);
// denda.hitungDenda();

class Movie {
  constructor(title, genre,director, year) {
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.director = director;
  }

  movieInfo(){
    console.log(`Judul: ${this.title}, Genre: ${this.genre}, Tahun: ${this.year}, Director: ${this.director}`);
  }
}

class SaveMovie {
  constructor(movie) {
    this.movie = movie;
  }

  saveToFile() {
    console.log(`Saving movie: ${this.movie.title}, directed by ${this.movie.director}, released in ${this.movie.year}`);
  }
}


let movie1 = new Movie("The Shawshank Redemption", "Drama", "Frank Darabont", 1994);
let saveMovie = new SaveMovie(movie1);
movie1.movieInfo();
saveMovie.saveToFile()