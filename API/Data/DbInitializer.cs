using System.Collections.Generic;
using System.Linq;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace API.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "bob",
                    Email = "bob@test.com"
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new User
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };
                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, new[] {"Member", "Admin"});
            }

            if(context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Laptop 1",
                    Description = "Odlican proizvod",
                    Price = 500,
                    PictureUrl = "/images/slika7.jpeg",
                    Brand = "HP",
                    Type = "Laptop",
                    QuantityInStock = 100

                },
                new Product
                {
                    Name = "Laptop 2",
                    Description = "Odlican proizvod",
                    Price = 700,
                    PictureUrl = "/images/slika2.jpeg",
                    Brand = "Mac",
                    Type = "Laptop",
                    QuantityInStock = 150

                },
                new Product
                {
                    Name = "Laptop 3",
                    Description = "Odlican proizvod",
                    Price = 1500,
                    PictureUrl = "/images/slika3.jpeg",
                    Brand = "Mac",
                    Type = "Laptop",
                    QuantityInStock = 200

                },
                new Product
                {
                    Name = "Laptop 4",
                    Description = "Odlican proizvod",
                    Price = 500,
                    PictureUrl = "/images/slika5.jpeg",
                    Brand = "Lenovo",
                    Type = "Laptop",
                    QuantityInStock = 101

                },
                new Product
                {
                    Name = "Laptop 5",
                    Description = "Odlican proizvod",
                    Price = 700,
                    PictureUrl = "/images/slika6.jpeg",
                    Brand = "Asus",
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