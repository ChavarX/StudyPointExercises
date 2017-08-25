package entity;

import entity.DiscountType;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2017-08-25T14:05:10")
@StaticMetamodel(Customer.class)
public class Customer_ { 

    public static volatile SingularAttribute<Customer, Integer> quantity;
    public static volatile ListAttribute<Customer, DiscountType> DiscountTypes;
    public static volatile SingularAttribute<Customer, Double> priceItem;
    public static volatile SingularAttribute<Customer, Long> id;

}