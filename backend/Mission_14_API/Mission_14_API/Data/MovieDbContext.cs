using System;
using Microsoft.EntityFrameworkCore;

namespace Mission_14_API.Data
{
	public class MovieDbContext : DbContext
	{
		public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }

		public DbSet<Movies> Movies { get; set; }
	}
}

