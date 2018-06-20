# BB Dot Net Developer Test

> This is a simple test to show us how awesome you are!

Your task is to build a super fast Dot Net powered web service to:

- Store products from a web request
- Retrieve products from a web request

## API Details

API Requests examples: 

`https://github.com/BookingBoss/dotnet-test/blob/master/GetProducts.json`

```
{
  "id": "(string) unique id of the event",
  "timestamp": "(timestamp) utc timestamp of the event",
  "products": [
    {
      "id": "(long) id of the product"
    }
  ]
}

```

`https://github.com/BookingBoss/dotnet-test/blob/master/PutProducts.json`

```
{
  "id": "(string) unique id of the event",
  "timestamp": "(timestamp) utc timestamp of the event",
  "products": [
    {
      "id": "(long) id of the product",
      "name": "(string) name of the product",
      "quantity": "(integer) quantity of the product",
      "sale_amount": "(double) total sale amount"
    }
  ]
}

```
## Requirements

- Good code quality
- Good component structure
- Use Entity Framework for storage or something else
- 100% Test coverage

## Optional

- Add authentication

## Notes

Feel free to use any kind of libraries or packages to help you achive your task

## Deliverable

Send us your repository URL. Your code will be reviewed and we may ask questions through an email.

When we pull your code let us know how to execute your code



