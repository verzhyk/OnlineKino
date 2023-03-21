using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OnlineKino.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        protected ApplicationContext _context = new ApplicationContext();
        [HttpGet]
        public List<User> GetAllActors()
        {
            return _context.Users.ToList();
        }
        [HttpPost]
        public void Post(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            User user = new User() { Id = id };
            _context.Users.Attach(user);
            _context.Users.Remove(user);
            _context.SaveChanges();
        }
        [HttpGet("{id}")]
        public User Get(int id) 
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }
        [HttpPut]
        public User Put(User user) 
        {
            _context.Entry(user).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return user;
        }
    }
}
