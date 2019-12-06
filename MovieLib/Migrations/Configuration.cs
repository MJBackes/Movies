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
                new Models.Director { FirstName = "Martin", LastName = "Scorsese", Image = PlaceholderString.PlaceholderStr },
                new Models.Director { FirstName = "Christopher", LastName = "Nolan", Image = PlaceholderString.PlaceholderStr },
                new Models.Director { FirstName = "David", MiddleName = "Gordan", LastName = "Green", Image = PlaceholderString.PlaceholderStr },
                new Models.Director { FirstName = "John", LastName = "McTiernan", Image = PlaceholderString.PlaceholderStr }
                );
            context.Movies.AddOrUpdate(
                new Models.Movie { Title = "The Departed", Genre = "Drama", Runtime = 151, DirectorId = 1 ,Image = PlaceholderString.PlaceholderStr },
                new Models.Movie { Title = "The Dark Knight", Genre = "Drama", Runtime = 152, DirectorId = 2, Image = PlaceholderString.PlaceholderStr },
                new Models.Movie { Title = "Inception", Genre = "Drama", Runtime = 148, DirectorId = 2, Image = PlaceholderString.PlaceholderStr },
                new Models.Movie { Title = "Pineapple Express", Genre = "Comedy", Runtime = 117, DirectorId = 3, Image = PlaceholderString.PlaceholderStr },
                new Models.Movie { Title = "Die Hard", Genre = "Action", Runtime = 132, DirectorId = 4, Image = PlaceholderString.PlaceholderStr }
            );
        }
    }
}
