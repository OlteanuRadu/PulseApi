using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security;
using System.Security.Claims;
using System.Threading.Tasks;
using Exchange101;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Exchange.WebServices.Data;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PulseAPI.Data;
using PulseAPI.Models;
using PulseAPI.Security;

namespace PulseAPI.Controllers
{

    public class FakeUser : IUserData
    {
        public ExchangeVersion Version => ExchangeVersion.Exchange2013;

        public string EmailAddress => "radu.olteanu@amdaris.com";

        public SecureString Password { get; set; }

        public Uri AutodiscoverUrl { get; set; }

        string IUserData.Password => throw new NotImplementedException();
    }

    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly AppDbContext _dbContext;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly TokenAuthOption _tokenOptions;
        // private readonly ExchangeService service = Service.ConnectToService(new FakeUser());
        public AccountController(AppDbContext dbContext,
                                UserManager<ApplicationUser> userManager, 
                                SignInManager<ApplicationUser> signInManager,
                                IOptions<TokenAuthOption> tokenOptions)
        {
            this._dbContext = dbContext;
            this._userManager = userManager;
            this._signInManager = signInManager;
            this._tokenOptions = tokenOptions.Value;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] ApplicationUser model)
        {
            var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
            var claims = new IdentityUserClaim<string> {
                ClaimType = "external",
                ClaimValue = "true"
            };

            var result = await this._userManager.CreateAsync(user, model.PasswordHash);
            if (result.Succeeded)
            {
                return Ok();
            }
            return this.BadRequest(result);
        }

        [HttpPut("login")]

        public async Task<IActionResult> Login([FromBody] ApplicationUser model)
        {
            var result =  this._signInManager.PasswordSignInAsync(model.Email, model.PasswordHash, isPersistent: true, lockoutOnFailure: false);

            if (result.Result.Succeeded)
            {
                var claimUser = await this._userManager.FindByEmailAsync(model.Email);
                var userClaims =  await this._userManager.GetClaimsAsync(claimUser);

                var claims = new[]
{
     new Claim(JwtRegisteredClaimNames.Sub, model.Email),
     new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
     new Claim(JwtRegisteredClaimNames.Email, model.Email)
}.Union(userClaims);


                var id = new ClaimsIdentity(userClaims);
                var requestAt = DateTime.Now;
                var expiresIn = requestAt + TokenAuthOption.ExpiresSpan;
                var token = this.GenerateToken(expiresIn, id);
                return Json(new RequestResult {
                    State = RequestState.Success,
                    Data = new {
                        requestAt,
                        expiresIn = TokenAuthOption.ExpiresSpan.TotalSeconds,
                        tokenType = TokenAuthOption.TokenType,
                        accesToken = token
                    }
                });
            }
            else
            {
                return BadRequest(new RequestResult
                {
                    State = RequestState.Failed,
                    Msg = "Username or password is invalid"
                });
            }

        }

        [HttpPost("logout")]
        public async Task<IActionResult> LogOff()
        {
            await _signInManager.SignOutAsync();
          //  _logger.LogInformation(4, "User logged out.");
            return Ok();
        }


        // GET api/values
        [HttpGet]
        public async Task<IQueryable<string>> Get()
        {
            // var listOpportunies = new List<Opportunity> { };
            // listOpportunies.Add(new Opportunity {Name = "A Opportunity" });
            // listOpportunies.Add(new Opportunity { Name = "B Opportunity" });
            // listOpportunies.Add(new Opportunity { Name = "C Opportunity" });
            // listOpportunies.Add(new Opportunity { Name = "D Opportunity" });
            // listOpportunies.Add(new Opportunity { Name = "E Opportunity" });

            //await  _dbContext.Opportunities.AddRangeAsync(listOpportunies);
            // await _dbContext.SaveChangesAsync();

            //service.Credentials = new WebCredentials("radu.olteanu@amdaris.com", "test");
            //service.UseDefaultCredentials = true;
            //service.AutodiscoverUrl("user1@contoso.com", (s) => {

            //    bool result = false;
            //    Uri redirectionUri = new Uri(s);
            //    if (redirectionUri.Scheme == "https")
            //    {
            //        result = true;
            //    }
            //    return result;
            //});
            return await System.Threading.Tasks.Task.Run(() =>  this._dbContext.Users.Select(_ => _.PasswordHash));
        }

        //public async void SendEmail() =>
        //  await System.Threading.Tasks.Task.Run(() =>
        //   {
        //      var email = new EmailMessage(this.service);
        //       email.ToRecipients.Add("test1@amdaris.ro");
        //       email.Subject = "Test";
        //       email.Body = new MessageBody("Test");
        //       email.Send();
        //   });

        //public async void SendSMS() =>
        //    await System.Threading.Tasks.Task.Run(() => {

        //        string attMailtoSMSGateway = "txt.att.net";
        //        string phoneNumber = "4255551212";

        //        // Form the SMS message.
        //        EmailMessage message = new EmailMessage(service)
        //        {
        //            ItemClass = "IPM.Note.Mobile.SMS"
        //        };
        //        message.ToRecipients.Add(phoneNumber + "@" + attMailtoSMSGateway);
        //        message.Subject = "Test subject";
        //        message.Body = "Test body";
        //        message.Send();
        //    });

        //public async void CreateAppointment() =>
        //    await System.Threading.Tasks.Task.Run(() => this.CreateMeeting(this.service));


        //private void CreateMeeting(ExchangeService service)
        //{
        //    bool demoBatchCreateMeeting = true;

        //    Appointment meeting1 = new Appointment(service);
        //    meeting1.Subject = "Status Meeting";
        //    meeting1.Body = "The purpose of this meeting is to discuss status.";
        //    meeting1.Start = new DateTime(2013, 6, 1, 9, 0, 0);
        //    meeting1.End = meeting1.Start.AddHours(2);
        //    meeting1.Location = "Conf Room";
        //    meeting1.RequiredAttendees.Add("user1@contoso.com");
        //    meeting1.RequiredAttendees.Add("user2@contoso.com");
        //    meeting1.OptionalAttendees.Add("user3@contoso.com");

        //    Appointment meeting2 = new Appointment(service);
        //    meeting2.Subject = "Lunch";
        //    meeting2.Body = "The purpose of this meeting is to eat and be merry.";
        //    meeting2.Start = new DateTime(2013, 6, 1, 12, 0, 0);
        //    meeting2.End = meeting2.Start.AddHours(2);
        //    meeting2.Location = "Contoso cafe";
        //    meeting2.RequiredAttendees.Add("user1@contoso.com");
        //    meeting2.RequiredAttendees.Add("user2@contoso.com");
        //    meeting2.OptionalAttendees.Add("user3@contoso.com");

        //    try
        //    {
        //        if (demoBatchCreateMeeting) // Show batch.
        //        {
        //            Collection<Appointment> meetings = new Collection<Appointment>();
        //            meetings.Add(meeting1);
        //            meetings.Add(meeting2);

        //            // Create the batch of meetings. This results in a CreateItem operation call to EWS.
        //            ServiceResponseCollection<ServiceResponse> responses = service.CreateItems(meetings,
        //                                                                                      WellKnownFolderName.Calendar,
        //                                                                                      MessageDisposition.SendOnly,
        //                                                                                      SendInvitationsMode.SendToAllAndSaveCopy);

        //            if (responses.OverallResult == ServiceResult.Success)
        //            {
        //                Console.WriteLine("You've successfully created a couple of meetings in a single call.");
        //            }
        //            else if (responses.OverallResult == ServiceResult.Warning)
        //            {
        //                Console.WriteLine("There are some issues with your batch request.");

        //                foreach (ServiceResponse response in responses)
        //                {
        //                    if (response.Result == ServiceResult.Error)
        //                    {
        //                        Console.WriteLine("Error code: " + response.ErrorCode.ToString());
        //                        Console.WriteLine("Error message: " + response.ErrorMessage);
        //                    }
        //                }
        //            }
        //            else // responses.OverallResult == ServiceResult.Error
        //            {
        //                Console.WriteLine("There are errors with your batch request.");

        //                foreach (ServiceResponse response in responses)
        //                {
        //                    if (response.Result == ServiceResult.Error)
        //                    {
        //                        Console.WriteLine("Error code: " + response.ErrorCode.ToString());
        //                        Console.WriteLine("Error message: " + response.ErrorMessage);
        //                    }
        //                }
        //            }
        //        }
        //        else // Show creation of a single meeting.
        //        {
        //            // Create a single meeting. This results in a CreateItem operation call to EWS.
        //            meeting1.Save(SendInvitationsMode.SendToAllAndSaveCopy);
        //            Console.WriteLine("You've successfully created a single meeting.");

        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Console.WriteLine("Exception info: " + ex.Message);
        //    }
        //}

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        private string GenerateToken(DateTime expires, ClaimsIdentity claims)
        {
            var handler = new JwtSecurityTokenHandler();
            var tk = new SecurityTokenDescriptor
            {
                Issuer = this._tokenOptions.Issuer,
                Audience = this._tokenOptions.Audience,
                SigningCredentials = this._tokenOptions.SigningCredentials,
                Subject = claims,
                NotBefore = DateTime.Now,
                Expires = expires
            };
            SecurityToken securityToken = null;
            try
            {
                 securityToken = handler.CreateToken(tk);
            }
            catch(Exception e)
            {
                throw;
            }
            return handler.WriteToken(securityToken);
        }
    }
}
