namespace Scheming.Wizard.Domain.Catalog;

public class Item
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Brand { get; set; }
    public decimal Price { get; set; }
    public List<Rating> Ratings { get; set; } = new List<Rating>();
    public Item(string name, string description, string brand, decimal price)
    {
        if (string.IsNullOrWhiteSpace(name))
        {
            throw new ArgumentException("name is required");
        }

        if (string.IsNullOrWhiteSpace(description))
        {
            throw new ArgumentException("description is required");
        }

        if (string.IsNullOrWhiteSpace(brand))
        {
            throw new ArgumentException("Brand is required");
        }

        if (price <= 0)
        {
            throw new ArgumentException("Price cannot be 0 or negative");
        }

        Name = name;
        Description = description;
        Brand = brand;
        Price = price;
    }

    public void AddRating(Rating rating)
    {
        Ratings.Add(rating);
    }
}