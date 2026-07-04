var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

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