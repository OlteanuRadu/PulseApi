using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PulseAPI.Data;
using PulseAPI.DTO;

namespace PulseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        public UserController(AppDbContext appDbContext) =>
            this._appDbContext = appDbContext;

        [HttpGet("Users")]
        public async Task<IQueryable<UserDTO>> GetUsers()
        {
            var s = this._appDbContext.ExchangeInformations.Add(new Models.ExchangeInformation { IdUser = Guid.NewGuid()});
            await this._appDbContext.SaveChangesAsync();

            return await Task.Run(() =>
                    this._appDbContext.Users.Select(_ => new UserDTO { Id = _.Id, UserName = _.UserName, Email = _.Email }));
        }
    }
}