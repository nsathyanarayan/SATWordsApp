using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using SATCards.Models;

namespace SATCards.Controllers
{
    [Produces("application/json")]
    [Route("api/words")]
    [EnableCors("CorsPolicy")]
    public class WordsController : Controller
    {
        private readonly ILogger<WordsController> _logger;

        public WordsController(ILogger<WordsController> logger)
        {
            _logger = logger;
        }

        // GET: api/Words
        [HttpGet]
        public IEnumerable<WordDetail> Get()
        {
            _logger.LogInformation("Getting SAT Words..");
            return JsonConvert.DeserializeObject<List<WordDetail>>(System.IO.File.ReadAllText(@"data\words.json"));
        }

        // GET: api/Words/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Words
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/Words/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
