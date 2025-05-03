Controller

######
cd API
dotnet run

dotnet watch

### migration folder create using
dotnet ef migrations add InitialCreate -p Persistence -s API

dotnet build

dotnet ef database update -p Persistence  -s API

dotnet ef database drop -p Persistence -s API
