let compose = (...args)=>(component)=>{
 return args.reduceRight((value,current)=>{
  return current(value);
  },component)
}

export default compose;