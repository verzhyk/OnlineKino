namespace OnlineKino
{
    public class Film
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public Genre[]? Genres { get; set; }
        public string? Description { get; set; }
        public Actor[]? Actors { get; set; }
        public int Rating { get; set; }
        public string Country { get; set; }
    }
}
