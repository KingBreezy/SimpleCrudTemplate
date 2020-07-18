using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace simplecrudtemplate.Models
{
    public partial class simplecrudtemplateContext : DbContext
    {
        public simplecrudtemplateContext()
        {
        }

        public simplecrudtemplateContext(DbContextOptions<simplecrudtemplateContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Userdetail> Userdetail { get; set; }
    }
}
