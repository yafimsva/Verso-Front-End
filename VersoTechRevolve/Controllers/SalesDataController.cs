using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace VersoTechRevolve.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class SalesDataController : ControllerBase
  {
    private static readonly string[] Months = new[]
    {
        "Jun", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    };

    private static readonly int[] AmountOfMoney = new[]
    {
        2015, 1500, 2300, 2100, 2000, 2400, 2800, 2500, 3000, 3200, 3000, 3300
    };

    private static readonly int[] AmountOfSales = new[]
    {
        700, 600, 750, 750, 740, 800, 950, 900, 1000, 1100, 1000, 1150
    };

    private readonly ILogger<SalesDataController> _logger;

    public SalesDataController(ILogger<SalesDataController> logger)
    {
      _logger = logger;
    }

    [HttpGet]
    public IEnumerable<SalesData> Get()
    {

      return Enumerable.Range(0, 12).Select(index => new SalesData
      {
        Month = Months[index],
        AmountOfMoney = AmountOfMoney[index],
        AmountOfSales = AmountOfSales[index]
      })
          .ToArray();
    }
  }
}