using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PulseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class OpportunityController : ControllerBase
    {
        public OpportunityController()
        {

        }

        [HttpGet]
        public async Task<IEnumerable<string>> Get()
        {
          var t =  await Task.Run(() => "Test".Select(_ => _.ToString()));
          return t;
        }
    }
}