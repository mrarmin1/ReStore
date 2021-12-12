using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.Extensions.Logging.Configuration;

namespace API.RequestHelpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<CreateProductDto, Product>();
            CreateMap<UpdateProductDto, Product>(); 
           
        }
    }
}