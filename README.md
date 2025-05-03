Controller

######
cd API
dotnet run

dotnet watch

dotnet ef migrations add InitialCreate -p Persistence -s API

dotnet build
