var builder = WebApplication.CreateBuilder(args);
builder.services.AddControllers();

var app = builder.Build();

//app.MapGet("/", () => "Hello World!");
app.MapControllers();

app.Run();
