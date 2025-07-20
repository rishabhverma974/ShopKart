package com.ShopKart.ecommerce.dao;


import com.ShopKart.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {

    //BTS Select * Fromm product where category_id = ?
    //URL Spring will automatically give endpoints...
    //.../products/search/findByCategoryId?id=2
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);
}
