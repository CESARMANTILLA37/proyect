import React, { useState, useEffect } from 'react';
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Carousel,
  Badge,
  ListGroup,
  Alert,
  Spinner
} from 'react-bootstrap';
import { 
  movies, 
  appInfo, 
  navigationItems, 
  footerInfo, 
  advertisementConfig,
  movieUtils 
} from './data.js';
import './styles.css';

const Principal = () => {
  // Estados principales
  const [currentPage, setCurrentPage] = useState('principal');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  // Películas filtradas
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Efecto para filtrar películas
  useEffect(() => {
    let result = movies;
    
    // Aplicar búsqueda
    if (searchTerm) {
      result = movieUtils.searchMovies(result, searchTerm);
    }
    
    // Aplicar filtro por género
    if (selectedGenre !== 'all') {
      result = movieUtils.filterByGenre(result, selectedGenre);
    }
    
    setFilteredMovies(result);
  }, [searchTerm, selectedGenre]);

  // Manejar selección de película
  const handleMovieSelect = (movie) => {
    setLoading(true);
    setSelectedMovie(movie);
    
    // Simular carga
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 1000);
  }
}

export default Principal;