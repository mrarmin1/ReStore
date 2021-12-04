using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if(context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Laptop 1",
                    Description = "Odlican proizvod",
                    Price = 500,
                    PictureUrl = "/images/laptop1.jpg",
                    Brand = "HP",
                    Type = "Laptop",
                    QuantityInStock = 100

                },
                new Product
                {
                    Name = "Laptop 2",
                    Description = "Odlican proizvod",
                    Price = 700,
                    PictureUrl = "/images/laptop2.jpeg",
                    Brand = "Acus",
                    Type = "Laptop",
                    QuantityInStock = 150

                },
                new Product
                {
                    Name = "Laptop 3",
                    Description = "Odlican proizvod",
                    Price = 1500,
                    PictureUrl = "/images/laptop3.png",
                    Brand = "Mac",
                    Type = "Laptop",
                    QuantityInStock = 200

                },
                new Product
                {
                    Name = "Laptop 4",
                    Description = "Odlican proizvod",
                    Price = 500,
                    PictureUrl = "/images/laptop5.png",
                    Brand = "Lenovo",
                    Type = "Laptop",
                    QuantityInStock = 101

                },
                new Product
                {
                    Name = "Laptop 5",
                    Description = "Odlican proizvod",
                    Price = 700,
                    PictureUrl = "/images/laptop4.jpeg",
                    Brand = "HP",
                    Type = "Laptop",
                    QuantityInStock = 140

                },

            };
            foreach(var product in products)
            {
                context.Products.Add(product);
            }
            context.SaveChanges();
        }
    }
}