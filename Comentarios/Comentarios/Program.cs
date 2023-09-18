using Comentarios;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

internal class Program
{
  private static void Main(string[] args)
  {
    var builder = WebApplication.CreateBuilder(args);



    // Add services to the container.

    builder.Services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();


    builder.Services.AddNpgsql<AplicationDbContext>(builder.Configuration.GetConnectionString("DefaultConnection"));
    AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);



    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
      app.UseSwagger();
      app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.MapControllers();

    app.Run();
  }
}