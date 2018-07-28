using System;

namespace PulseAPI.Models
{
    public class ExchangeInformation
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public Guid IdUser { get; set; }
    }
}
