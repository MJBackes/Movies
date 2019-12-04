namespace MovieLib.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MovieLib.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MovieLib.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.

            //Seed Data -- put this in the Seed method in configuration.cs
            context.Directors.AddOrUpdate(
                new Models.Director { FirstName = "Martin", LastName = "Scorsese" },
                new Models.Director { FirstName = "Christopher", LastName = "Nolan" },
                new Models.Director { FirstName = "David", MiddleName = "Gordan", LastName = "Green" },
                new Models.Director { FirstName = "John", LastName = "McTiernan" }
                );
            context.Movies.AddOrUpdate(
                new Models.Movie { Title = "The Departed", Genre = "Drama", DirectorId = 1 },
                new Models.Movie { Title = "The Dark Knight", Genre = "Drama", DirectorId = 2 },
                new Models.Movie { Title = "Inception", Genre = "Drama", DirectorId = 2 },
                new Models.Movie { Title = "Pineapple Express", Genre = "Comedy", DirectorId = 3 },
                new Models.Movie { Title = "Die Hard", Genre = "Action", DirectorId = 4 }
            );
        }
    }
}
