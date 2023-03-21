using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OnlineKino.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorsController : ControllerBase
    {
        protected ApplicationContext _context = new ApplicationContext();
        [HttpGet]
        public List<Actor> GetAllActors()
        {
            return _context.Actors.ToList();
        }
        [HttpPost]
        public void Post(Actor actor) 
        {
            _context.Actors.Add(actor);
            _context.SaveChanges();
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Actor actor = new Actor() { Id = id };
            _context.Actors.Attach(actor);
            _context.Actors.Remove(actor);
            _context.SaveChanges();
        }
        [HttpGet("{id}")]
        public Actor Get(int id) 
        {
            return _context.Actors.FirstOrDefault(a => a.Id == id);
        }
        [HttpPut]
        public Actor Put(Actor actor) 
        {
            _context.Entry(actor).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return actor;
        }
    }
}
