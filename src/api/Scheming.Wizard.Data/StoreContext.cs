using Microsoft.EntityFrameworkCore;
using Scheming.Wizard.Domain.Catalog;

namespace Scheming.Wizard.Data;

public class StoreContext : DbContext
{
    public StoreContext(DbContextOptions<StoreContext> options) : base(options)
    {

    }

    public DbSet<Item> Items { get; set; }
}