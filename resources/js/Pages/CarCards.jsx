import React, { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import "../../css/CarCards.css";
import calendarImage from "../../assets/calendar.png";
import sortImage from "../../assets/sort.png";
import MainLayout from "@/Layouts/MainLayout";


const CarCards = ({ cars: initialCars, filters, activeFilters }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState(
    activeFilters?.sort_by === 'price' && activeFilters?.sort_direction === 'asc' ? "cheapest" : 
    activeFilters?.sort_by === 'price' && activeFilters?.sort_direction === 'desc' ? "expensive" : 
    "recommended"
  );
  
  const [isLoading, setIsLoading] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);
    
    const updatedFilters = { ...activeFilters };
    
    if (option === "cheapest") {
      updatedFilters.sort_by = 'price';
      updatedFilters.sort_direction = 'asc';
    } else if (option === "expensive") {
      updatedFilters.sort_by = 'price';
      updatedFilters.sort_direction = 'desc';
    } else {
      updatedFilters.sort_by = 'id';
      updatedFilters.sort_direction = 'asc';
    }
    
    setIsLoading(true);
    router.get('/vyber-aut', updatedFilters, {
      preserveState: true,
      replace: true,
      onSuccess: () => {
        setIsLoading(false);
      }
    });
  };

  const handleFilterChange = (filterType, value) => {
    const updatedFilters = { ...activeFilters };
    
    if (updatedFilters[filterType] === value) {
      delete updatedFilters[filterType];
    } else {
      updatedFilters[filterType] = value;
    }
    
    setIsLoading(true);
    router.get('/vyber-aut', updatedFilters, {
      preserveState: true,
      replace: true,
      onSuccess: () => {
        setIsLoading(false);
      }
    });
  };

  const handleReservation = (id) => {
    router.visit(`/vyber-aut/${id}`);
  };

  const getSortLabel = () => {
    switch (sortOption) {
      case "cheapest":
        return "Nejlevnější";
      case "expensive":
        return "Nejdražší";
      default:
        return "Doporučeno";
    }
  };

  const renderFilterDropdown = (filterType, options, label) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="filter-dropdown">
        <div 
          className={`filter-label ${activeFilters?.[filterType] ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {label} ▼
        </div>
        
        {isOpen && (
          <div className="filter-dropdown-menu">
            {options?.map((option) => (
              <div 
                key={option} 
                className={`filter-dropdown-item ${activeFilters?.[filterType] === option ? 'active' : ''}`}
                onClick={() => {
                  handleFilterChange(filterType, option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="container">
        <h1>Výběr našich vozidel</h1>
        <div className="CarCards-underline"></div>
        <p className="subtext">Dostupných vozidel: {initialCars?.length || 0}</p>

        <div className="sort-button-container">
          <button className="sort-button" onClick={toggleDropdown}>
            <img src={sortImage} alt="Sort" className="sort-icon" />
            Seřadit podle: {getSortLabel()}
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div 
                className={`dropdown-item ${sortOption === "recommended" ? 'active' : ''}`}
                onClick={() => handleSortChange("recommended")}
              >
                Doporučeno
              </div>
              <div 
                className={`dropdown-item ${sortOption === "cheapest" ? 'active' : ''}`}
                onClick={() => handleSortChange("cheapest")}
              >
                Nejlevnější
              </div>
              <div 
                className={`dropdown-item ${sortOption === "expensive" ? 'active' : ''}`}
                onClick={() => handleSortChange("expensive")}
              >
                Nejdražší
              </div>
            </div>
          )}
        </div>

        <div className="filters">
          {renderFilterDropdown("brand", filters?.brands, "Značka")}
          {renderFilterDropdown("model", filters?.models, "Model")}
          {renderFilterDropdown("fuel", filters?.fuels, "Palivo")}
          {renderFilterDropdown("category", filters?.categories, "Karoserie")}
        </div>

        {isLoading ? (
          <div className="loading">Načítání vozidel...</div>
        ) : (
          <div className="carcards-car-list">
            {initialCars && initialCars.length > 0 ? (
              initialCars.map((car) => (
                <div key={car.id} className="car-card">
                  <img src={car.image} alt={car.name} />
                  <div className="car-info">
                    <h3>{car.name}</h3>
                    <p className="price">{car.price}kč/den</p>
                  </div>
                  <p className="description">{car.description.length > 100 ? car.description.slice(0, 100) + "..." : car.description}</p>
                  <div className="reserve-container">
                    <button className="reserve-button" onClick={() => handleReservation(car.id)}>
                      Rezervovat
                    </button>
                    <div className="calendar-icon">
                      <img src={calendarImage} alt="Kalendář" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-cars-found">
                <p>Nebyla nalezena žádná vozidla odpovídající vašim filtrům.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CarCards;