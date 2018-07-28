
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace PulseAPI.Hubs
{
    public class ExchangeServiceHub : Hub
    {

        public ExchangeServiceHub()
        {

        }
        public Task Send(string message)
        {
            return this.Clients.All.SendAsync("Send",message);
        }
    }
}
