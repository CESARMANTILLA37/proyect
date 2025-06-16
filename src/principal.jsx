import React, { useState } from 'react';

const CinematecaBoliviana = () => {
  const [currentPage, setCurrentPage] = useState('Principal');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    {
      id: 1,
      title: "La Nación Clandestina",
      image: "public/nacion.jpg",
      actors: ["Reynaldo Yujra", "Delfina Mamani", "Orlando Huanca"],
      summary: "Drama boliviano que narra la historia de Sebastián Mamani, un indígena aymara que regresa a su pueblo natal después de años de exilio en la ciudad."
    },
    {
      id: 2,
      title: "Jonás y la Ballena Rosada",
      image: "public/cementerio.jpg",
      actors: ["Julia Vargas", "Bismark Rojas", "Nieves Galindo"],
      summary: "Una historia de amor y búsqueda de identidad en el contexto de la Bolivia contemporánea."
    },
    {
      id: 3,
      title: "El Coraje del Pueblo",
      image: "public/coraje.jpg",
      actors: ["Domitila Chungara", "Eusebio Gironda", "Federico Vallejo"],
      summary: "Docudrama sobre la masacre de San Juan en las minas de Siglo XX, basado en hechos reales."
    },
    {
      id: 4,
      title: "Chuquiago",
      image: "public/chuquiago.jpg",
      actors: ["Edmundo Villarroel", "Elsa Parrado", "Carlos Monje"],
      summary: "Retrato de La Paz a través de cuatro historias que muestran diferentes estratos sociales."
    },
    {
      id: 5,
      title: "Mi Socio",
      image: "public/socio.jpg",
      actors: ["David Mondacca", "Ana Cristina Pereira", "Gustavo Sánchez"],
      summary: "Comedia boliviana sobre las aventuras y desventuras de dos amigos en La Paz."
    }
  ];

  const Modal = ({ movie, onClose }) => (
    <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-3/4 lg:w-1/2">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-red-800">{movie.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>
        </div>
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Actores Principales:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {movie.actors.map((actor, index) => (
                <li key={index}>{actor}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Resumen:</h3>
            <p className="text-gray-700">{movie.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-red-800 mb-4">Bienvenidos a la Cinemateca Boliviana</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Descubre el rico patrimonio cinematográfico de Bolivia. Nuestra colección incluye 
          las obras más representativas del cine nacional, desde los clásicos hasta las 
          producciones contemporáneas.
        </p>
      </div>
      
      <div className="grid">
        {movies.slice(0, 3).map((movie) => (
          <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="info">
              <h3 className="font-semibold text-lg mb-2">{movie.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{movie.summary.substring(0, 100)}...</p>
              <button
                onClick={() => setSelectedMovie(movie)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MoviesPage = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-red-800 text-center mb-8">Catálogo de Películas</h2>
      <div className="grid">
        {movies.map((movie) => (
          <div key={movie.id} className="card">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="info">
              <h3 className="font-semibold text-lg mb-2">{movie.title}</h3>
              <div className="mb-3">
                <span className="text-sm text-gray-600">Protagonistas: </span>
                <span className="text-sm">{movie.actors.slice(0, 2).join(', ')}</span>
              </div>
              <button
                onClick={() => setSelectedMovie(movie)}
                className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="app">
      {/* Header */}
      <header className="bg-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-center">CINEMATECA BOLIVIANA</h1>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setCurrentPage('Principal')}
              className={`py-3 px-6 hover:bg-red-600 transition-colors ${
                currentPage === 'Principal' ? 'bg-red-600' : ''
              }`}
            >
              Principal
            </button>
            <button
              onClick={() => setCurrentPage('Películas')}
              className={`py-3 px-6 hover:bg-red-600 transition-colors ${
                currentPage === 'Películas' ? 'bg-red-600' : ''
              }`}
            >
              Películas
            </button>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-8">
        {currentPage === 'Principal' && <HomePage />}
        {currentPage === 'Películas' && <MoviesPage />}
      </main>

      
      {/* Modal */}
      {selectedMovie && (
        <Modal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-red-800 text-white mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <p>© 2024 Cesar Carlos Mantilla Lluta</p>
            <div className="bg-yellow-600 px-4 py-2 rounded">
              <span className="font-semibold">INF122 - Programacion Web II</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CinematecaBoliviana;