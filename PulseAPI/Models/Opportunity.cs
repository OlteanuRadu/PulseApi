using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PulseAPI.Models
{
    public class Opportunity
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public string Name { get; set; }
    }
}
