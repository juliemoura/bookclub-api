using Microsoft.EntityFrameworkCore;
using WebPostgreSQL.Models;
using Microsoft.Extensions.DependencyInjection;
using WebPostgreSQL;
using WebPostgreSQL.Services;
using Microsoft.AspNetCore.Hosting;
using NuGet.Protocol.Core.Types;
using OfficeOpenXml;

var builder = WebApplication.CreateBuilder(args);

// Definindo o contexto de licença do EPPlus
ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

// Add services to the container.

// inject the books on a /api/books
builder.Services.AddScoped<IBookService, BooksService>();

builder.Services.AddControllersWithViews();

builder.Services.AddEntityFrameworkNpgsql()
    .AddDbContext<Contexto>(options =>
    options.UseNpgsql("Host=localhost;Port=5432;Pooling=true;Database=bookclub;User Id=postgres; Password=julie123"));

#region [Cors]
builder.Services.AddCors();
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

#region [Cors]
app.UseCors(c =>
{
    c.AllowAnyHeader();
    c.AllowAnyMethod();
    c.AllowAnyOrigin();
});
#endregion

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();

