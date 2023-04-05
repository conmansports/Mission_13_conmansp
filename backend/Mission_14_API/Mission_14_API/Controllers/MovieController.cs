using System;
using Microsoft.AspNetCore.Mvc;
using Mission_14_API.Data;

namespace Mission_14_API.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class MovieController : Controller
	{
		private MovieDbContext context;

		public MovieController(MovieDbContext temp)
		{
			context = temp;
		}

		public IEnumerable<Movies> Get()
		{
			return context.Movies
				.Where(movie => movie.Edited == "Yes")
				.OrderBy(movie => movie.Title)
				.ToArray();
		}
	}
}

