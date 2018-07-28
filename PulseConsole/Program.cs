using Exchange101;
using Microsoft.Exchange.WebServices.Data;
using System;
using System.Security;
using System.Threading;

namespace PulseConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            

            var userData = new UserData();
            userData.AutodiscoverUrl = new Uri("https://outlook.office365.com/EWS/Exchange.asmx");

            var service = Service.ConnectToService(userData);


            var streamingSubscription = service.SubscribeToStreamingNotifications(
new FolderId[] { WellKnownFolderName.Inbox },
EventType.NewMail,
EventType.Created,
EventType.Deleted,
EventType.Modified,
EventType.Moved,
EventType.Copied,
EventType.FreeBusyChanged);

            var connection = new StreamingSubscriptionConnection(service, 30);
            connection.AddSubscription(streamingSubscription);
            connection.OnNotificationEvent += (s, e) =>
            {
                Console.WriteLine("Test");
            };
            connection.OnDisconnect += (s, e) => { };
            connection.Open();

            var message = new EmailMessage(service)
            {
                Subject = "Test",
                Body = "This is your last email"
            };
            message.ToRecipients.Add("radu.olteanu@amdaris.com");
            message.Send();


            //  var view = new ItemView(100);
            // // var findItem = new PropertySet(BasePropertySet.IdOnly);
            ////  view.PropertySet = findItem;

            //  var GetItemsPropertySet = new PropertySet(BasePropertySet.FirstClassProperties);
            //  GetItemsPropertySet.RequestedBodyType = BodyType.Text;

            //var results =  service.FindItems(WellKnownFolderName.Inbox, view) ;

            //  service.LoadPropertiesForItems(results.Items, GetItemsPropertySet);

            //  foreach (var res in results)
            //  {
            //      if (res.Body != null)
            //      {
            //          Thread.Sleep(2000);
            //          Console.WriteLine(res.Body.Text);
            //      }
            //  }


            Console.ReadKey();
        }
    }

    public class UserData : IUserData
    {
        public UserData()
        {
        }

        public ExchangeVersion Version => ExchangeVersion.Exchange2010_SP1;

        public string EmailAddress => "radu.olteanu@amdaris.com";

        public SecureString Password => "abc$2022".ToSecureString();

        public Uri AutodiscoverUrl { get; set; }

        string IUserData.Password => throw new NotImplementedException();
    }

    public static class Extensions
    {
        public static SecureString ToSecureString(this string source)
        {
            char[] charArray = source.ToCharArray();
            unsafe
            {
                fixed (char* chars = charArray)
                {
                    return new SecureString(chars, charArray.Length);
                }
            }
        }
    }
}
