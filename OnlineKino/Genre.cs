namespace OnlineKino
{
    public class Genre
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Film[] Films { get; set; }
    }
}
