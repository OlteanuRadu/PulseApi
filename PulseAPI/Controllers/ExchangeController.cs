using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Threading.Tasks;
using Exchange101;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Exchange.WebServices.Data;
using PulseAPI.Hubs;

namespace PulseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExchangeController : ControllerBase
    {
        private ExchangeService _service;
        private readonly IHubContext<ExchangeServiceHub> exchangeHubCtx;
        public ExchangeController(IHubContext<ExchangeServiceHub> exchangeHubCtx) =>
            this.exchangeHubCtx = exchangeHubCtx;
        [HttpPost("Auth")]
        public async Task<ActionResult> Connect(ExchangeUser exchangeUser)
        {
            exchangeUser.AutodiscoverUrl = new Uri("https://outlook.office365.com/EWS/Exchange.asmx");

             this._service = Service.ConnectToService(exchangeUser);

            if(this._service != null)
            {
                return await System.Threading.Tasks.Task.Run(() => this.Ok("Connected to Exchange Server"));
            }
            return await System.Threading.Tasks.Task.Run(() => this.NotFound("Failed to Connect to Exchange Server"));
        }

        [HttpPost("OnSubscribe")]
        public IActionResult OnSubscribe()
        {
            this.exchangeHubCtx.Clients.All.SendAsync("send", "Hello from server");
            return Ok();
        }

        [HttpPost("Email")]
        public async Task<ActionResult> SendEmail(EmailMetadata emailMedata)
        {
            var exchangeUser = new ExchangeUser { EmailAddress = "radu.olteanu@amdaris.com", PlainTextPassword = "abc$2022" };
            exchangeUser.AutodiscoverUrl = new Uri("https://outlook.office365.com/EWS/Exchange.asmx");
            this._service = Service.ConnectToService(exchangeUser);

            if (this._service !=null)
            {
                var email = new EmailMessage(this._service);
                email.ToRecipients.Add(emailMedata.Recipients);
                email.Subject = emailMedata.Subject;
                email.Body = new MessageBody(emailMedata.MessageBodyText);
                email.Send();
                return this.Ok("Message sent");
            }

            throw new Exception("");
        }

        [HttpPost("Subscribe")]
        public async Task<IActionResult> Subscribe()
        {
            //var t = Url.RouteUrl("Default", new { action = "OnSubscribe" }, "https", "pulsee.azurewebsites.net/api");

            var exchangeUser = new ExchangeUser { EmailAddress = "radu.olteanu@amdaris.com", PlainTextPassword = "abc$2022" };
            exchangeUser.AutodiscoverUrl = new Uri("https://outlook.office365.com/EWS/Exchange.asmx");
            this._service = Service.ConnectToService(exchangeUser);


             this._service.SubscribeToPushNotificationsOnAllFolders(
                new Uri("https://pulsee.azurewebsites.net/api/exchange/onsubscribe"), 5, null,
                        EventType.NewMail,
                        EventType.Created,
                        EventType.Deleted,
                        EventType.Modified,
                        EventType.Moved,
                        EventType.Copied);

            return this.Ok("Subscribed!");
        }
    }

    public class ExchangeUser : UserData
    {
        private string _plainTextPassword;
        public string PlainTextPassword
        {
            get => this._plainTextPassword;
            set
            {
                this._plainTextPassword = value;
                this.Password = this._plainTextPassword;
            }
        }
    }

    public abstract class UserData : IUserData
    {
        public ExchangeVersion Version => ExchangeVersion.Exchange2010_SP1;

        public virtual string EmailAddress { get; set; }

        public virtual string Password { get; set; }

        public Uri AutodiscoverUrl { get; set; }
    }


    public static class Extensions
    {
        //public static SecureString ToSecureString(this string source)
        //{
        //    char[] charArray = source.ToCharArray();
        //    unsafe
        //    {
        //        fixed (char* chars = charArray)
        //        {
        //            return new SecureString(chars, charArray.Length);
        //        }
        //    }
        //}
    }

    public class EmailMetadata
    {
        public string Recipients { get; set; }
        public string Subject { get; set; }
        public string MessageBodyText { get; set; }
    }
}