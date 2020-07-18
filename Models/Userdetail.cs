using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace simplecrudtemplate.Models
{
    public partial class Userdetail
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }
}
