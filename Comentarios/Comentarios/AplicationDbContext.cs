using System;
using Comentarios.Models;
using Microsoft.EntityFrameworkCore;
namespace Comentarios
{
  public class AplicationDbContext : DbContext
  {
    public DbSet<Comentario> Comentario { get; set; }

    public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
    {

    }
  }

}

