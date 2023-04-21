using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace OnlineKino.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FilmsController : ControllerBase
    {
        protected ApplicationContext _context = new ApplicationContext();
        private readonly ILogger<FilmsController> _logger;
        public FilmsController(ILogger<FilmsController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public List<Film> Get(string? title)
        {
            _logger.LogInformation(title);
            if (title == null)
            {
                return _context.Films.ToList();
            }
            else 
            {
                return _context.Films.Where(f => f.Name.ToLower().Contains(title.ToLower())).ToList();
            }
        }
        [HttpGet("{id}")]
        public Film? Get(int id) 
        {
            return _context.Films.SingleOrDefault(f => f.Id == id);
        }
        [HttpGet("GetByRaiting")]
        public List<Film>? Get(int raitingLow = 0, int raitingHigt = 100) 
        {
            return _context.Films.Where(f => f.Rating >= raitingLow && f.Rating <= raitingHigt).ToList();        }

        [HttpPost]
        public void Post(Film film) 
        {
            _context.Films.Add(film);
            _context.SaveChanges();
        }
        [HttpDelete("{id}")]
        public void Delete(int id) 
        {
            Film film = new Film() { Id = id };
            _context.Films.Attach(film);
            _context.Films.Remove(film);
            _context.SaveChanges();
        }
        [HttpPut]
        public Film Put(Film film)
        {
            _context.Entry(film).State = EntityState.Modified;
            _context.SaveChanges();
            return film;
        }
    }
}
