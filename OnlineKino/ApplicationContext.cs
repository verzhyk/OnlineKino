using Microsoft.EntityFrameworkCore;

namespace OnlineKino
{
    public class ApplicationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Film> Films { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Actor> Actors { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=onlinekino.db");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Film>().HasMany(f => f.Genres).WithMany(g => g.Films).UsingEntity(j => j.ToTable("FilmGenres"));
            modelBuilder.Entity<Film>().HasMany(f => f.Actors).WithMany(a => a.Films).UsingEntity(j => j.ToTable("FilmActors"));
        }
    }
}
