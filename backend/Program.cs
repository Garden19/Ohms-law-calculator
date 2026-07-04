var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("AllowAngularApp");

var batteries = new [] {
    new { Id = 1, Brand = "Sony", Model = "VTC6", Voltage = 4.2, AmpRating = 15 },
    new { Id = 2, Brand = "Sony", Model = "VTC5", Voltage = 4.2, AmpRating = 20 },
    new { Id = 3, Brand = "Sony", Model = "VTC4", Voltage = 4.2, AmpRating = 30 },
};

app.MapGet("/batteries", () =>
{
    return batteries;
});

app.Run();